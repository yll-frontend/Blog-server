const UserModel = require('./../model/UserModel')

class User {
  static async create(params) {
    const { username } = params
    try {
      await UserModel.findOne({
        username
      })
    } catch (error) {
      console.log(error);
    }
  }
}
// static async create(params) {
//   const {email, password, nickname} = params

//   const hasAdmin = await Admin.findOne({
//     where: {
//       email,
//       deleted_at: null
//     }
//   });

//   if (hasAdmin) {
//     throw new global.errs.Existing('管理员已存在');
//   }

//   const admin = new Admin();
//   admin.nickname = nickname
//   admin.email = email
//   admin.password = password
//   admin.save();

//   return {
//     email: admin.email,
//     nickname: admin.nickname
//   }
// }

// // 验证密码
// static async verify(email, plainPassword) {

//   // 查询用户是否存在
//   const admin = await Admin.findOne({
//     where: {
//       email
//     }
//   })

//   if (!admin) {
//     throw new global.errs.AuthFailed('账号不存在或者密码不正确')
//   }

//   // 验证密码是否正确
//   const correct = bcrypt.compareSync(plainPassword, admin.password);

//   if (!correct) {
//     throw new global.errs.AuthFailed('账号不存在或者密码不正确')
//   }

//   return admin
// }

// // 查询管理员信息
// static async detail(id) {
//   const scope = 'bh';
//   // 查询管理员是否存在
//   const admin = await Admin.scope(scope).findOne({
//     where: {
//       id
//     }
//   })

//   if (!admin) {
//     throw new global.errs.AuthFailed('账号不存在或者密码不正确')
//   }

//   return admin
// }


module.exports = User