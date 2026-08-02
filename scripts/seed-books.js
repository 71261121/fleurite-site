const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  try {
    // Delete existing products
    await prisma.product.deleteMany({
      where: {
        slug: { in: ['free-guide-why-you-shrink', 'paid-book-stop-shrinking'] }
      }
    });

    // Create free guide product
    const freeGuide = await prisma.product.create({
      data: {
        name: 'Why You Shrink Yourself (Free Guide)',
        slug: 'free-guide-why-you-shrink',
        subtitle: 'The 3-Day Reset for Anxious Attachment',
        description:
          'A free guide that reveals why you shrink yourself in relationships and provides a practical 3-day reset to help your nervous system relearn safety.',
        benefits:
          'Understand the pattern • Validate your nervous system • Take action immediately • Get clarity on what comes next',
        price: 0,
        image: '/book-cover.png',
        bestseller: true,
        featured: true,
        productType: 'guide',
        isActive: true,
        sortOrder: 1
      }
    });

    console.log('✓ Free guide created:', freeGuide.name);

    // Create paid book product
    const paidBook = await prisma.product.create({
      data: {
        name: 'Stop Shrinking Yourself: The Complete Guide',
        slug: 'paid-book-stop-shrinking',
        subtitle: 'The Exact Words to Say + How to Know If He\'ll Actually Change',
        description:
          'The complete guide with 47 scripts for anxious attachment dynamics. Learn exactly what to say when he pulls away, how to set boundaries, and most importantly—how to know if he\'s willing to change.',
        benefits:
          '47 copy-paste scripts • Understand his nervous system • Know if he'll change • Set real boundaries • Leave with dignity if needed • Get clarity on your relationship',
        price: 27,
        originalPrice: 47,
        image: '/book-cover.png',
        bestseller: true,
        featured: true,
        productType: 'guide',
        isActive: true,
        sortOrder: 2
      }
    });

    console.log('✓ Paid book created:', paidBook.name);
    console.log('\nProducts seeded successfully!');
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
