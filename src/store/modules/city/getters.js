export default {
  output: state => {
    const labels = [
      '城市总人口',
      '新增人口',
      '人口增长率',
      '互联网用户'
    ]
    const values = [
      state.population.total,
      state.population.new,
      state.population.growthRate,
      state.population.internetUser
    ]
    const units = [
      '人',
      '人',
      '人',
      '人'
    ]
    const output = []
    for (let i = 0; i < labels.length; i++) {
      output.push({
        label: labels[i],
        value: values[i],
        unit: units[i]
      })
    }
    return output
  }
}
