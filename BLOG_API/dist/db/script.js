import prisma from './db.js';
async function main() {
  await prisma.post.createMany({
    data: [
      {
        title: 'Getting Started with Prisma',
        content: 'This post explains how to use Prisma with PostgreSQL.',
        published: true,
      },
      {
        title: 'Understanding REST APIs',
        content: 'REST APIs use HTTP methods for communication.',
        published: true,
      },
      {
        title: 'Why TypeScript is Useful',
        content: 'TypeScript adds static typing to JavaScript.',
        published: false,
      },
      {
        title: 'Learning Express.js',
        content: 'Express is a minimal backend framework for Node.js.',
        published: true,
      },
      {
        title: 'Database Indexing Explained',
        content: 'Indexes improve query performance significantly.',
        published: false,
      },
      {
        title: 'Authentication with JWT',
        content: 'JWT allows stateless authentication.',
        published: true,
      },
      {
        title: 'Session vs JWT',
        content: 'Sessions store state on the server while JWTs are stateless.',
        published: false,
      },
      {
        title: 'Pagination in APIs',
        content: 'Pagination helps manage large datasets efficiently.',
        published: true,
      },
      {
        title: 'Deploying Node Applications',
        content: 'Learn how to deploy Express applications.',
        published: true,
      },
      {
        title: 'Prisma Relations Guide',
        content: 'Relations help connect database models together.',
        published: false,
      },
    ],
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
