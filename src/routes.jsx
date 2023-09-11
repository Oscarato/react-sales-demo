import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  QueueListIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile } from "@/pages/graficas";
import { ToDo } from "@/pages/todo";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "graficas",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "gráficas",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <QueueListIcon {...icon} />,
        name: "tareas",
        path: "/tasks",
        element: <ToDo />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      }
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
