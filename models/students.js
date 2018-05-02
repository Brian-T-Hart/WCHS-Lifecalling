module.exports = function (sequelize, DataTypes) {
    var students = sequelize.define("students", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                len: [1, 12]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4, 50]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        strengths: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        mbti: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        gifts: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        loveLanguages: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        intelligences: {
            type: DataTypes.ENUM,
            allowNull: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
        { timestamps: true });
    return students;
};
