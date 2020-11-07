import CurrenciesStore from "./CurrenciesStore";
import ConverterStore from "./ConverterStore";


const stores = {
    converterStore: new ConverterStore(),
    currenciesStore: new CurrenciesStore(),
};

export default stores;
