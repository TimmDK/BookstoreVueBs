import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index";

interface Ibook {
    id : number;
    title : string;
    author : string;
    publisher : string;
    price : number;
}

new Vue({
    el: "#app", 
    data: {
        books : [],
        errors : []
    },

    created()
    {
        console.log("CREATED")
        axios.get<Ibook[]>("http://anbo-bookstorerest.azurewebsites.net/api/Books")
            .then((response : AxiosResponse<Ibook[]>) => {
                console.log(response.data)
                this.books = response.data
            })
            .catch((error : AxiosError) => {
                this.errors = error
            })
    },

    methods: {

    }
})



function MakeLongHtmlList(data: Ibook[]):string
{
    let longHtml : string = "<table class='table'><thead class='thead-dark'><th>ID</th><th>TITEL</th><th>FORFATTER</th><th>FORLAG</th><th>PRIS</th>";
    data.forEach(book => {
        longHtml += "<tr>";
        longHtml += "<td>" + book.id + "</td>"
        longHtml += "<td>" + book.title + "</td>"
        longHtml += "<td>" + book.author + "</td>"
        longHtml += "<td>" + book.publisher + "</td>"
        longHtml += "<td>" + book.price + "</td>"
        longHtml += "</tr>"
    });
    longHtml += "</thead></table>";

    return longHtml;
}