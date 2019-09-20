'use strict';
module.exports = (sequelize, DataTypes) => {
  const evolucion = sequelize.define('evolucion', {
    notaEvaluacion: DataTypes.STRING,
    fecha: DataTypes.STRING,
    diagnosticoId: DataTypes.INTEGER
  }, {});
  evolucion.associate = (models) => {
    // associations can be defined here
    evolucion.belongsTo(models.diagnostico,{
      foreignkey: 'diagnosticoId',
      onDelete: 'CASCADE'
    });
  };
  return evolucion;
};