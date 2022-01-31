import 'package:dart_application/models.dart';

var variable = "Variable";
const constant = "Constant";

void main(List<String> arguments) {
  User user = User("user", "password");
  user.description = "Description";
  String? upperDescription = user.description?.toUpperCase();

  User admin = User.admin("admin", "admin");
}
