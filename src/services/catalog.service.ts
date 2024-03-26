import { ICatalogRepository } from "../interface/catalogRepository.interface";

export class CatalogService {
    constructor(private _repository: ICatalogRepository) { }

    async createProduct(input: any) {
        const data = await this._repository.create(input);
        if (!data.id) throw new Error("unable to create product");
        return data;
    }

    async updateProduct(input: any) {
        const data = await this._repository.update(input);
        if (!data.id) throw new Error("unable to update product");
        return data;
    }

    async getProducts(limit: number, offset: number) {
        return this._repository.find(limit, offset);
    }

    async getProduct(id: number) {
        return this._repository.findOne(id);
    }

    async deleteProduct(id: number) {
        return this._repository.delete(id);
    }
}
