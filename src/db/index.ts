import fs from 'node:fs/promises';
import path from 'node:path';

const URI = process.env.MONGO_URL || 'mongodb://localhost:27017';
type IdType = string | number

class DB {
    dbDir = path.normalize('src/db');
    dbFilePath = 'db.json';
    dbPath: string;
    dbName = 'mock';

    constructor({
        dir,
        filePath,
        name,
    }: any = {}) {
        this.dbDir = dir ?? this.dbDir;
        this.dbFilePath = filePath ?? this.dbFilePath;
        this.dbPath = path.join(this.dbDir, this.dbFilePath);
        this.dbName = name ?? this.dbName
        this.init();
    }

    private init() {
        fs.access(this.dbPath)
        .then(() => {
            console.log('DB mock is existing');
        })
        .catch(() => {
            const date = new Date();
            const newDb = {
                database: 'mock',
                'created_at': date,
                'updated_at': date,
                'models': {},
            };

            fs.writeFile(this.dbPath, JSON.stringify(newDb), 'utf-8')
            .then(() => console.log('success to create db mock'))
            .catch((err) => console.log('failed to create db mock', err));
        });
    }

    private async getDbFile(isRetried?: boolean): Promise<any> {
        if (isRetried) {
            throw new Error('Can\'t get db file');
        }
        try {
            const dataString = await fs.readFile(this.dbPath, 'utf-8');
            return JSON.parse(dataString);
        } catch (err) {
            await this.init();
            return this.getDbFile(true);
        }
    }

    private async updateDbModel(modelName: string, modelData: any) {
        const dbFile = await this.getDbFile();

        dbFile.models = {
            ...dbFile.models,
            [modelName]: modelData,
        };
        dbFile.updated_at = new Date();
        await fs.writeFile(this.dbPath, JSON.stringify(dbFile), 'utf-8');
    }

    public async getModel(model: string) {
        try {
            const dbFile = await this.getDbFile()

            const models = dbFile.models

            return models[model] || [];
        } catch (err) {
            console.log(`Failure to get model ${model}`);
        }
    }

    public async saveData(modelName: string, data: any, options?: any, retry?: boolean) {
        try {
            const {where = null} = options || {};
            const modelData = await this.getModel(modelName);

            modelData.push(data);

            await this.updateDbModel(modelName, modelData)


            console.log(`success saved data for ${modelName}`);

        } catch (err) {
            console.log(`failed to save data for ${modelName}`);
        }
    }

    public async removeById(modelName: string, id: IdType) {
        const files = await this.getModel(modelName);

        const fileIndex = files.findIndex((item: any) => String(item.id) === String(id));
        console.log({model: modelName, fileIndex, id});
        if (fileIndex >= 0) {
            const deletedItem = files.splice(fileIndex, 1);

            await this.updateDbModel(modelName, files)

            return deletedItem;
        }

        return false;
    }

    public async findById(modelName: string, id: IdType) {
        try {
            const file = await this.getModel(modelName);


            console.log({file})
            const item = file.find((item: any) => String(item.id) === String(id));
            if (!item) {
                return false
            }

            return item
        } catch (err) {
            console.log(`failed to find file by ${modelName}`);
        }
    }

    public async findAndUpdate(modelName: string, id: IdType, updatedData: any) {

        const model = await this.getModel(modelName);
        const findIndex = model.findIndex((el: any) => String(el.id) === String(id))

        if (findIndex < 0) {
            return false
        }

        const item = model[findIndex]

        const updatedItem = {
            ...item,
            ...updatedData
        }

        model.splice(findIndex, 1, updatedItem)

        await this.updateDbModel(modelName, model)

        return updatedItem
    }
}


export const db = new DB();
export const connectToDatabase = async () => {
    try {
        // await mongoose.connect(URI)
        console.log('Connected to MongoDB', db);
    } catch (e) {
        console.log(`Error connecting to MongoDB: ${e}`);
    }
};



