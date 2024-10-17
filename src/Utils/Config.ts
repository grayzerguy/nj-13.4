//development + production configuration
class Config {


}

//development configuration
class DeveloperConfig extends Config {

    public productsUrl = "http://localhost:3030/delay/api/products/"

}
//production configuration
class ProductionConfig extends Config {

    public productsUrl = "www://northwind/api/products/"

}

const config = process.env.NODE_ENV === "development" ? new DeveloperConfig() : new ProductionConfig();

export default config