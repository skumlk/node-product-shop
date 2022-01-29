
import { Service } from "typedi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

@Service()
export default class BrandModelService
{
    async list()
    {
        return await prisma.brand.findMany()
    }

    async get(id: number)
    {
        return await prisma.brand.findUnique({
            where: { id }
        })
    }

    async delete(id: number)
    {
        return await prisma.brand.delete({
            where: { id }
        })
    }

    async createMany(brands: { name: string }[])
    {
        //Using this instead of create many since, it return all objects
        return await prisma.$transaction(
            brands.map((brand) => prisma.brand.create({ data: brand })),
        );
    }
}