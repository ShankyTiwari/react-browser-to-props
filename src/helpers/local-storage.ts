class LocalStorage {
    getAllLocalStorage = () => {
        const newLsValues: any = {};
        const lsValue = Object.entries(localStorage);
        for (let i = 0; i < lsValue.length; i++) {
            const key = lsValue[i][0];
            try {
                newLsValues[key] = JSON.parse(lsValue[i][1]);
            } catch (error) {
                newLsValues[key] = lsValue[i][1];
            }
        }
        return newLsValues;
    };

    getLocalStorageValueByKey = (key: string): any => {
        const value = window.localStorage.getItem(key);
        let finalValue = null;
        try {
            finalValue = JSON.parse(value === null ? '""' : value);
        } catch (error) {
            finalValue = value;
        }
        return finalValue;
    };

    deleteLocalStorageValueByKey = (key: string): boolean => {
        try {
            window.localStorage.removeItem(key);
            return true;
        } catch (error) {
            return false
        }
    };

    deleteAllLocalStorageValue = (): boolean => {
        try {
            window.localStorage.clear();
            return true;
        } catch (error) {
            return false
        }
    };


    setLocalStorageValueByKey = (key: string, value: any): boolean => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true
        } catch (error) {
            return false
        }
    };
}

export default LocalStorage;