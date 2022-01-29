
import { Service } from "typedi";
import { PrismaClient } from "@prisma/client";
import IProduct from "../interfaces/IProduct";

const prisma = new PrismaClient()

@Service()
export default class ProductModelService
{
    async list()
    {
        return await prisma.product.findMany({
            include: { Brand: true}
        })
    }

    async get(id: number)
    {
        return await prisma.product.findUnique({
            include: { Brand: true},
            where: { id }
        })
    }

    async delete(id: number)
    {
        return await prisma.product.deleteMany({
            where: { id }
        })
    }

    async createMany(products: IProduct[])
    {
        //Using this instead of create many since, it return all objects
        return await prisma.$transaction(
            products.map((product) => prisma.product.create({ data: product })),
        );
    }
}