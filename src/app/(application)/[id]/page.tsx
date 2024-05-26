"use client";

import { Icon, IconNames } from "@/components/base/Icon";
import { Typography } from "@/components/base/Typography";
import { ItemCard } from "@/components/modules/ItemCard";
import { ListColors, ListColorsBackgroundMap } from "@/const";

import { faker } from "@faker-js/faker";
import { Pagination } from "@nextui-org/pagination";
import { cn } from "@nextui-org/system";

// TODO: get from API
const list = {
  id: faker.string.uuid(),
  name: faker.lorem.words(3),
  description: faker.lorem.paragraph(),
  itemsCount: faker.number.int({ min: 1, max: 100 }),
  lastModified: faker.date.recent().toISOString(),
  icon: faker.helpers.arrayElement(IconNames),
  color: faker.helpers.arrayElement(ListColors),
};

const items = new Array(5).fill(0).map(() => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  price: Number(faker.commerce.price()),
  image:
    "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80",
}));

const RootPage = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <header className={cn("py-10", ListColorsBackgroundMap[list.color])}>
        <div className="mx-auto container flex flex-col sm:flex-row items-baseline gap-4">
          <div className="grid grid-cols-1 gap-2">
            <Typography level="h1" styling="h1" className="text-white">
              {list.name}
            </Typography>
            <Typography className="text-white">{list.description}</Typography>
          </div>
          <span className="-order-1 bg-clip-border rounded-xl overflow-hidden text-white shadow-2xl shadow-white grid min-h-16 min-w-16 place-items-center">
            <Icon name={list.icon} size={32} />
          </span>
        </div>
      </header>
      <section className="mx-auto container grid grid-cols-1 gap-4 pb-10">
        <Typography level="h2" styling="h2">
          {list.itemsCount} items
        </Typography>
        <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <li key={item.id}>
              <ItemCard
                description={item.description}
                image={item.image}
                name={item.name}
                price={item.price}
                className="h-full"
              />
            </li>
          ))}
        </ul>

        <Pagination isCompact total={5} page={5} onChange={() => undefined} />
      </section>
    </div>
  );
};

export default RootPage;
