import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Button,
  Input
} from "@material-tailwind/react";

const Tasks = ({
  title,
  list,
  handleEdit,
  handleCreate,
  handleRemove,
  handleCompleted,
  handleFilter
}) => {
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" className="mb-8 p-6">
          <Typography variant="h6" color="blue">
            Lista de {title}
          </Typography>
          <Card className="mt-6 ">
            <select onChange={(e) => handleFilter(e.target.value)}>
              <option value="all">Todas</option>
              <option value="completed">Completadas</option>
              <option value="pending">Pendientes</option>
            </select>
          </Card>
          <Typography variant="h6" color="white">
            <form onSubmit={(e) => {
                e.preventDefault();
                handleCreate({ text: e.target.elements.task.value, isCompleted: false });
                e.target.reset();
            }}>
              <div className="grid gap-y-2 gap-x-2 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                <Card className="mt-6 ">
                    <Input name="task" label="Agrear Tarea" />
                </Card>
                <Card className="mt-6">
                    <Button type="submit">Agregar</Button>
                </Card>
              </div>
            </form>
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Tarea", "Estado", ""].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {list.map(
                ({ text, isCompleted }, key) => {
                  const className = `py-3 px-5 ${key === list.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                    }`;

                  return (
                    <tr key={text}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {text}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Chip
                          variant="gradient"
                          color={isCompleted ? "green" : "blue-gray"}
                          value={isCompleted ? "Completada" : "Sin Completar"}
                          className="py-0.5 px-2 text-[11px] font-medium"
                        />
                      </td>
                      <td className={className}>
                      <div className="grid gap-y-2 gap-x-2 md:grid-cols-2 xl:grid-cols-2">
                        <Card className="mt-2 w-30">
                          <Button onClick={() => handleRemove(key)}>Eliminar</Button>
                        </Card>
                        {
                          !isCompleted ? 
                          <Card className="mt-2 w-30">
                              <Button onClick={() => handleCompleted(key)}>Completar</Button>
                          </Card> : 
                          <></>
                        }
                        <Card className="mt-2 w-30">
                          <Button onClick={() => handleEdit(key)}>Editar</Button>
                        </Card>
                      </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>

    </div>
  )
}

Tasks.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCompleted: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Tasks;