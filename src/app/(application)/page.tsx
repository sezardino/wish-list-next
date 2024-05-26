"use client";

import { IconNames } from "@/components/base/Icon";
import { ListCardProps } from "@/components/modules/ListCard";
import { ListOfList } from "@/components/modules/ListOfList";
import { ListColors } from "@/const";

import { faker } from "@faker-js/faker";

// TODO: get from API
const cards: (ListCardProps & { id: string })[] = new Array(9)
  .fill(0)
  .map((_, index) => ({
    id: faker.string.uuid(),
    name: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    itemsCount: faker.number.int({ min: 1, max: 100 }),
    lastModified: faker.date.recent().toISOString(),
    link: "#",
    icon: faker.helpers.arrayElement(IconNames),
    color: faker.helpers.arrayElement(ListColors),
  }));

const RootPage = () => {
  return (
    <div className="p-5 grid grid-cols-1 gap-20">
      <ListOfList title="Recently viewed" cards={cards.slice(0, 3)} />

      <ListOfList
        title="List of List"
        cards={cards}
        pagination={{
          total: 100,
          page: 1,
          onChange: (page: number) => console.log(page),
        }}
      />
    </div>
  );
};

export default RootPage;
