type TransactionType = 'buy' | 'sell' | 'deposit' | 'withdrawal' | 'dividend';

interface ITransaction {
    name: string;
    amount: number; //сумма операции
    date: Date;
    note?: string; //примечание
    commission?: number;
    price?: number; //цена за еденицу
}

interface StockTransaction {
    type: 'buy' | 'sell' | 'dividend';
    symbol: string; // Тикер акции
    amount: number; // Количество акций
    price: number; // Цена за акцию
    date: Date; // Дата транзакции
}

interface BondTransaction {
    type: 'buy' | 'sell' | 'interest'; // Тип транзакции (покупка, продажа, проценты)
    name: string; // Название облигации
    amount: number; // Количество облигаций
    price: number; // Цена за облигацию
    date: Date; // Дата транзакции
}

interface CryptoTransaction {
    type: 'buy' | 'sell'; // Тип транзакции (покупка, продажа)
    symbol: string; // Тикер криптовалюты
    amount: number; // Количество криптовалюты
    price: number; // Цена за единицу криптовалюты
    date: Date; // Дата транзакции
}

interface CurrencyTransaction {
    type: 'buy' | 'sell'; // Тип транзакции (покупка, продажа)
    currency: string; // Код валюты
    amount: number; // Количество валюты
    rate: number; // Курс валюты
    date: Date; // Дата транзакции
}

