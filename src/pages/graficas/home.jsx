import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Select, 
  Option
} from "@material-tailwind/react";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsChartsData,
  statisticsCharts
} from "@/data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

export function Home() {

  // filters
  const [startDate, setStartDate] = useState(new Date(moment().subtract(1, 'year')));
  const [endDate, setEndDate] = useState(new Date());
  const [selectedGraphic, setSelectedGraphic] = useState('bar'); 
  const [selectedData, setSelectedData] = useState('sales'); 
  const [showGrap, setShowGrap] = useState(false); 
  const [fulldata, setFullData] = useState([]); 

  // Map charge
  useEffect(() => {
    setFullData(JSON.parse(JSON.stringify(statisticsChartsData)))
    statisticsCharts[selectedGraphic].series = statisticsChartsData.find(s=>s.type == selectedData).data;
    statisticsCharts[selectedGraphic].options.xaxis.categories = statisticsChartsData.find(s=>s.type == selectedData).categories
    setTimeout(() => {
      setShowGrap(true)
    }, 500);
  }, []);

  // Change map from selects
  useEffect(() => {
    showDataGrap()
  }, [selectedGraphic, selectedData]);

  // Change data from date selects
  useEffect(() => {
    if(fulldata.length>0){
      let chartData = fulldata.find(s=>s.type == selectedData);
      let dataObj = {}
      for (let index = 0; index < chartData.categories.length; index++) {
        const categ = chartData.categories[index];
        dataObj[categ] = chartData.data[0].data[index]
      }
      // filter by dates
      let dateF = Object.keys(dataObj).filter(date => {
        return moment(date) >= moment(startDate) && moment(date) <= moment(endDate)
      }  )
      statisticsChartsData.find(s=>s.type == selectedData).categories = dateF;
      let dataInt = []
      dateF.map(d=>{
        dataInt.push(dataObj[d])
      })
      statisticsChartsData.find(s=>s.type == selectedData).data = [{
        name: selectedData,
        data: dataInt
      }];
      setTimeout(() => {
        showDataGrap()
      }, 500);
    }
  }, [startDate, endDate]);

  function RenderMaps() {
    if(!showGrap) return null
    return <StatisticsChart
    key={statisticsChartsData.find(s=>s.type == selectedData).title}
    {...statisticsChartsData.find(s=>s.type == selectedData)}
    chart={statisticsCharts[selectedGraphic]}
  />;
  }

  // Change map info
  const showDataGrap = () => {
    setShowGrap(false)
    try {
      
      switch (selectedGraphic) {
        case 'bar':
          statisticsCharts[selectedGraphic].series = statisticsChartsData.find(s=>s.type == selectedData).data
          statisticsCharts[selectedGraphic].options.xaxis.categories = statisticsChartsData.find(s=>s.type == selectedData).categories
          break;
        case 'line':
          statisticsCharts[selectedGraphic].series = statisticsChartsData.find(s=>s.type == selectedData).data
          statisticsCharts[selectedGraphic].options.xaxis.categories = statisticsChartsData.find(s=>s.type == selectedData).categories
          break;
        case 'pie':
          statisticsCharts[selectedGraphic].series = statisticsChartsData.find(s=>s.type == selectedData).data[0].data
          statisticsCharts[selectedGraphic].options.labels = statisticsChartsData.find(s=>s.type == selectedData).categories
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(error)
    }

    setTimeout(() => {
      setShowGrap(true)
    }, 100);
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" className="mb-8 p-6 h-60">
          <Typography variant="h6" color="blue">
            Gráficas
          </Typography>
          <Typography variant="h6" color="white">
            <div className="grid gap-y-2 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
              <Card className="mt-6 w-96">
                <div className="w-90">
                  <Select 
                    value={selectedGraphic} 
                    label="Tipo de Gráfico"
                    onChange={e => setSelectedGraphic(e)}
                  >
                    <Option value="bar">Gráfico de barras</Option>
                    <Option value="line">Gráfico de líneas</Option>
                    <Option value="pie">Gráfico de torta</Option>
                  </Select>
                </div>
              </Card>
              <Card className="mt-6 w-96">
                <div className="w-90">
                  <Select 
                    value={selectedData} 
                    onChange={e => setSelectedData(e)}
                    label="Datos a mostrar en el gráfico"
                  >
                    <Option value="sales">Ventas por región</Option>
                    <Option value="users">Usuarios registrados por mes</Option>
                  </Select>
                </div>
              </Card>
              <Card className="mt-6 w-96">
                Desde:
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
              </Card>
              <Card className="mt-6 w-96">
                Hasta:
                <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
              </Card>
            </div>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          
          <div className="mb-6 ">
            <RenderMaps></RenderMaps>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Home;
