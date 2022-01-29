import { PrismaClient } from '@prisma/client';
import { brands } from './seeds/brands';
import { products } from './seeds/products';

const prisma = new PrismaClient();

async function main() {

    await prisma.brand.createMany({
        data: brands,
    });

    await prisma.product.createMany({
      data: products,
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

// sudo prisma migrate reset --force --preview-feature && prisma migrate deploy --preview-feature