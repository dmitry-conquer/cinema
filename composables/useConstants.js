import IconCalendar from "~/components/Icon/IconCalendar.vue";
import IconCategories from "~/components/Icon/IconCategories.vue";
import IconEye from "~/components/Icon/IconEye.vue";
import IconHeart from "~/components/Icon/IconHeart.vue";
import IconHouse from "~/components/Icon/IconHouse.vue";
import IconIncrease from "~/components/Icon/IconIncrease.vue";
import IconInfinity from "~/components/Icon/IconInfinity.vue";
import IconRandom from "~/components/Icon/IconRandom.vue";
import IconTrophy from "~/components/Icon/IconTrophy.vue";
import IconAI from "~/components/Icon/IconAI.vue";

export const useConstants = () => {
  const SIDEBAR_NAVIGATION = [
    {
      label: "Меню",
      items: [
        {
          name: "Домашня",
          icon: IconHouse,
          url: "/",
        },
        {
          name: "Зараз дивляться",
          icon: IconEye,
          url: "/now-watch",
        },
        {
          name: "Найбільший рейтинг",
          icon: IconTrophy,
          url: "/top-rate",
        },
        {
          name: "Популярні",
          icon: IconIncrease,
          url: "/popular",
        },
        {
          name: "Скоро з'являться",
          icon: IconCalendar,
          url: "/upcoming",
        },
        {
          name: "Категорії",
          icon: IconCategories,
          url: "/genres",
        },
      ],
    },
    {
      label: "Бібліотека",
      items: [
        {
          name: "Улюблені",
          icon: IconHeart,
          url: "/favorites",
        },
      ],
    },
    {
      label: "Інтерактив",
      items: [
        {
          name: "Штучний інтелект",
          icon: IconAI,
          url: "/ai",
          slug: "AI",
        },
        {
          name: "Рандомайзер",
          icon: IconRandom,
          url: "/random",
        },
        {
          name: "Нескінченні фільми",
          icon: IconInfinity,
          url: "/infinity",
        },
      ],
    },
  ];
  const GENRES_LIST = [
    {
      id: 28,
      name: "Бойовик",
    },
    {
      id: 12,
      name: "Пригоди",
    },
    {
      id: 16,
      name: "Мультфільм",
    },
    {
      id: 35,
      name: "Комедія",
    },
    {
      id: 80,
      name: "Кримінал",
    },
    {
      id: 99,
      name: "Документальний",
    },
    {
      id: 18,
      name: "Драма",
    },
    {
      id: 10751,
      name: "Сімейний",
    },
    {
      id: 14,
      name: "Фентезі",
    },
    {
      id: 36,
      name: "Історичний",
    },
    {
      id: 27,
      name: "Жахи",
    },
    {
      id: 10402,
      name: "Музика",
    },
    {
      id: 9648,
      name: "Детектив",
    },
    {
      id: 10749,
      name: "Мелодрама",
    },
    {
      id: 878,
      name: "Фантастика",
    },
    {
      id: 10770,
      name: "Телефільм",
    },
    {
      id: 53,
      name: "Трилер",
    },
    {
      id: 10752,
      name: "Військовий",
    },
    {
      id: 37,
      name: "Вестерн",
    },
  ];
  const MOVIES_ITEMS_IN_SEARCH = 10;

  return {
    SIDEBAR_NAVIGATION,
    GENRES_LIST,
    MOVIES_ITEMS_IN_SEARCH,
  };
};
