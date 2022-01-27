import { PrismaClient } from '@prisma/client';
import { brands } from './seeds/brands';
import { products } from './seeds/products';

const prisma = new PrismaClient();

async function main() {

    await prisma.product.createMany({
        data: products,
    });

    await prisma.brand.createMany({
        data: brands,
    });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });