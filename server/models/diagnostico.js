'use strict';
module.exports = (sequelize, DataTypes) => {
  const diagnostico = sequelize.define('diagnostico', {
    userpacienteId: DataTypes.INTEGER,
    motivoConsulta: DataTypes.STRING,
    diagPresuntivo: DataTypes.STRING,
    tratamiento: DataTypes.STRING
  }, {});
  diagnostico.associate = function(models) {
    // associations can be defined here
    diagnostico.hasMany(models.evolucion,{
      foreignkey: 'diagnosticoId',
    })
  };
  return diagnostico;
};