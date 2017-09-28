module.exports = function(sequelize, DataTypes){
	var Task = sequelize.define("Task", {
		title: {
			type: DataTypes.STRING,
		},
		text: {
			type: DataTypes.STRING,
		},
		status: {
			type: DataTypes.STRING,
		}
	},
	    {
      classMethods: {
        associate: function(models) {
          Task.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
	);
	return Task;
}