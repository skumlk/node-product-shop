import { Service } from "typedi";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

@Service()
export default class UserModelService {

    async createNewUser(data: { email: string, name: string, password: string }) {
        // await prisma.user.create (data)
    }

    async getUserByEmail(email: string) {
        return await prisma.product.findMany({
            include: { Brand: true}
        })
    }
}