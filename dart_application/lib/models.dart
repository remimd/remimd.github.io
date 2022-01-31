class User {
  static const String verboseName = "Utilisateur";

  final bool _isAdmin;
  final String _username;
  String _password;
  String? description;

  User(String username, this._password):
        assert(username.isNotEmpty & _password.isNotEmpty),
        _username = username.toLowerCase(),
        _isAdmin = false;

  User.admin(String username, this._password):
        assert(username.isNotEmpty & _password.isNotEmpty),
        _username = username.toLowerCase(),
        _isAdmin = true;

  @override
  String toString() => _username;

  String get hello => "Hello $_username!";
  String get username => _username;
  bool get isAdmin => _isAdmin;

  set password(String password) {
    if (password.isNotEmpty) _password = password;
  }

  bool checkPassword(String password) => _password == password;
}
