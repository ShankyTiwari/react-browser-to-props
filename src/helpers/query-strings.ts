class QueryStrings {
    allQueryParams:any = {};

    getAllQueryParams = () => {
        const url = window.location.href;
        const params: any = {};
        const parser = document.createElement('a');
        parser.href = url;
        const query = parser.search.substring(1);
        const queries = query.split('&');
        for (let i = 0; i < queries.length; i++) {
            const pair = queries[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }
        this.allQueryParams = params;
        return params;
    }

    getQueryParamsValueByKey = (key: string): string  => {
        if(this.allQueryParams === null)  {
            const queryParams = this.getAllQueryParams();
            return queryParams[key];
        } else {
            return this.allQueryParams[key];
        }
    }
}

export default QueryStrings;