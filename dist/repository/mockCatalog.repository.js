"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockCatalogRepository = void 0;
class MockCatalogRepository {
    create(data) {
        const mockProduct = Object.assign({ id: 12 }, data);
        return Promise.resolve(mockProduct);
    }
    update(data) {
        return Promise.resolve(data);
    }
    delete(id) {
        return Promise.resolve(id);
    }
    find(limit, offset) {
        return Promise.resolve([]);
    }
    findOne(id) {
        return Promise.resolve({ id });
    }
}
exports.MockCatalogRepository = MockCatalogRepository;
