import { faker } from '@faker-js/faker';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const useGraphData = () => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext.theme;

  return [
    {
        title: 'Average response Time',
        averagePercentageTitleEstimation: '+4.14%',
        averageTitle: 'Average Response Time',
        averageTitleEstimateMins: '30 mins',
        responseTime: '1 hour 30 mins', 
        data: {
            labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            get getLabels() {
                const self = this;
                return self.labels
            },
            datasets: [
                {
                  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map(() => faker.datatype.number({ min: 0, max: 50 })),
                  borderColor: '#F05D23',
                  backgroundColor: 'rgba(255, 255, 255)',
                  label: 'Average response Time',
                  pointRadius: 6,
                  borderWidth: 2
                },
                
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              }
            },
            scales: {
              x: {
                ticks: {
                  padding: 5,
                  fontColor: '#6837EF'
                },
                grid: {
                  display: false,
                  drawBorder: false,
                },
                scaleLabel: {
                  fontColor: '#6837EF'
                }
              },
              y: {
                ticks: {
                    padding: 20
                },
                grid: {
                  drawBorder: false, // <-- this removes y-axis line
                  color: `${theme === 'dark' ? '#233040' : '#ECEBF5'}`
                },
                scaleLabel: {
                  fontColor: '#6837EF'
                }
              }
            }
        }
    },
    {
        title: 'Replies per resolution ',
        averagePercentageTitleEstimation: '+6.14%',
        averageTitle: 'Replies per resolution ',
        averageTitleEstimateMins: '20 mins',
        responseTime: '1 hour 3 mins', 
        data: {
            labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            get getLabels() {
                const self = this;
                return self.labels
            },
            datasets: [
                {
                  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map(() => faker.datatype.number({ min: 0, max: 50 })),
                  borderColor: '#3E68FF',
                  backgroundColor: 'rgba(255, 255, 255)',
                  label: 'Replies per resolution ',
                  pointRadius: 6,
                  borderWidth: 2
                },
                
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              }
            },
            scales: {
              x: {
                ticks: {
                    padding: 5
                },
                grid: {
                  display: false,
                  drawBorder: false,
                }
              },
              y: {
                ticks: {
                    padding: 20
                },
                weight: 16,
                grid: {
                  drawBorder: false,
                  color: `${theme === 'dark' ? '#233040' : '#ECEBF5'}`
                }
              }
            }
        }
    },
    {
        title: 'Average resolution time',
        averagePercentageTitleEstimation: '+9.54%',
        averageTitle: 'Average resolution time',
        averageTitleEstimateMins: '50 mins',
        responseTime: '1 hour 5 mins', 
        data: {
            labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            get getLabels() {
                const self = this;
                return self.labels
            },
            datasets: [
                {
                  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map(() => faker.datatype.number({ min: 0, max: 50 })),
                  borderColor: '#FB6491',
                  backgroundColor: 'rgba(255, 255, 255)',
                  label: 'Average resolution time',
                  pointRadius: 6,
                  borderWidth: 2
                },
                
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              }
            },
            scales: {
              x: {
                ticks: {
                    padding: 5
                },
                grid: {
                  display: false,
                  drawBorder: false,
                }
              },
              y: {
                ticks: {
                    padding: 20
                },
                weight: 1,
                grid: {
                  drawBorder: false,
                  color: `${theme === 'dark' ? '#233040' : '#ECEBF5'}`
                }
              }
            }
        }
    },
    {
        title: 'First contact resolution rate',
        averagePercentageTitleEstimation: '+2.14%',
        averageTitle: 'First contact resolution rate',
        averageTitleEstimateMins: '16 mins',
        responseTime: '2 hour 30 mins', 
        data: {
            labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            get getLabels() {
                const self = this;
                return self.labels
            },
            datasets: [
                {
                  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'].map(() => faker.datatype.number({ min: 0, max: 50 })),
                  borderColor: '#07C9E2',
                  backgroundColor: 'rgba(255, 255, 255)',
                  label: 'First contact resolution rate',
                  pointRadius: 6,
                  borderWidth: 2
                },
                
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              }
            },
            scales: {
              x: {
                ticks: {
                    padding: 5
                },
                grid: {
                  display: false,
                  drawBorder: false,
                }
              },
              y: {
                ticks: {
                    padding: 20
                },
                grid: {
                  drawBorder: false,
                  color: `${theme === 'dark' ? '#233040' : '#ECEBF5'}`
                }
              }
            }
        }
    },
  ]
}

export default useGraphData;