export  class service_base {
    static API_NAME="https://heroic-beauty-85276b92ee.strapiapp.com/api";
       static get_URL(name:string) {
        return `${this.API_NAME}/${name}`;
       }
    
}