module.exports = function(sequelize, DataTypes){
	var Todo = sequelize.define("Todo", {
		title: {
			type: DataTypes.STRING,
		},
		text: {
			type: DataTypes.STRING,
		},
		status: {
			type: DataTypes.STRING,
		},
		userID: {
			type: DataTypes.STRING
		}
	},
	    {
      classMethods: {
        associate: function(models) {
          Todo.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
	);
	return Todo;
}