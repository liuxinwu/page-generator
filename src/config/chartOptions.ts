export const asideConfig = {
  minWidth: "80px",
  maxWidth: "360px",
}

export const chartOptions = {
  line: {
    tooltip: {
      trigger: "item",
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    grid: {
      left: "15%",
    },
    series: [
      {
        data: [820, 932, 901, -934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
  },
  pie: {
    title: {
      text: "某站点用户访问来源",
      subtext: "纯属虚构",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "50%",
        roseType: "angle",
        right: -100,
        data: [
          { value: 1048, name: "搜索引擎" },
          { value: 735, name: "直接访问" },
          { value: 580, name: "邮件营销" },
          { value: 484, name: "联盟广告" },
          { value: 300, name: "视频广告" },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  },
}
