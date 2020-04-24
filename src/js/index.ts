import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

interface Ibook {
    title : string;
    artist : string;
    releaseYear : number;
}

new Vue({
    el: "#app", 
    data: {
        books : [],
        errors : [],
        search : ""
    },

    created()
    {
        console.log("CREATED")
        axios.get<Ibook[]>("https://restdrrecordstimm.azurewebsites.net/api/records")
            .then((response : AxiosResponse<Ibook[]>) => {
                console.log(response.data)
                this.books = response.data
            })
            .catch((error : AxiosError) => {
                this.errors = error
            })
    },

    methods: {

         bookSearch : function()
        {
            if(this.search != "" && this.search != null)
            {
                axios.get<Ibook[]>("https://restdrrecordstimm.azurewebsites.net/api/records?title="+ this.search) 
                .then((response : AxiosResponse<Ibook[]>) =>{
                    console.log(response.data)
                    this.books = response.data
                })
                .catch((error : AxiosError) => {
                    this.errors = error
                })
            }
        } 

    }
})