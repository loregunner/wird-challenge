/* eslint-disable @typescript-eslint/no-explicit-any */

export const newArrayFilter = (array: any[], query: string) => {
    return array.filter((item: any) => {
      if (query === "" || query === undefined) {
        return item;
      } else if (
        item.name.toLowerCase().includes(query.toLowerCase())
      ) {
        return item;
      }
    });
  };