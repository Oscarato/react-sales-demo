import {
  HomeIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  QueueListIcon,
  DocumentMinusIcon
} from "@heroicons/react/24/solid";
import { Home } from "@/pages/graficas";
import { ToDo } from "@/pages/todo";
import { Files } from "@/pages/files";
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
        icon: <DocumentMinusIcon {...icon} />,
        name: "archivos",
        path: "/files",
        element: <Files />,
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
