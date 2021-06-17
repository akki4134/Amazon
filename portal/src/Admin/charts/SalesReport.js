import ReactECharts from 'echarts-for-react';

const SalesReport = () => {
    var option = {
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: 'Sales',
                type: 'pie',
                radius: ['45%', '70%'],
                avoidLabelOverlap: true,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2,
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '10',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Request' },
                    { value: 735, name: 'Online' },
                    { value: 580, name: 'Store' },
                    { value: 484, name: 'reference' }
                ]
            }
        ]
    };
    return (
        <div>
            <ReactECharts option={option} style={{ top: "-120px" }} />
        </div>
    )
}

export default SalesReport


