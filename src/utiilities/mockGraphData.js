import { faker } from '@faker-js/faker';

const graphData = [
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
                  drawBorder: false, // <-- this removes y-axis line
                }
              }
            }
        }
    },
    {
        title: 'Average response Time',
        averagePercentageTitleEstimation: '+6.14%',
        averageTitle: 'Average Response Time',
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
                  label: 'Average response Time',
                  pointRadius: 6,
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
                }
              }
            }
        }
    },
    {
        title: 'Average response Time',
        averagePercentageTitleEstimation: '+9.54%',
        averageTitle: 'Average Response Time',
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
                  label: 'Average response Time',
                  pointRadius: 6,
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
                }
              }
            }
        }
    },
    {
        title: 'Average response Time',
        averagePercentageTitleEstimation: '+2.14%',
        averageTitle: 'Average Response Time',
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
                  label: 'Average response Time',
                  pointRadius: 6,
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
                }
              }
            }
        }
    },
]

export default graphData;