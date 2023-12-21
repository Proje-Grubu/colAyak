const mongoose = require('mongoose');

// varsayılan bağlantı
let defaultConnectionString = 'mongodb+srv://default:tkk6tJP48tEsfnR5@colayak.eawkzxv.mongodb.net/colAyak';
/*const username = document.getElementById('username').value;
const password = document.getElementById('password').value;*/


// MongoDB bağlantısını başlatan fonksiyon
function connectToDatabase(connectionString) {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, "MongoDB bağlantı hatası:"));
    db.once('open', () => {
        console.log("Database'e bağlandı");
    });
}

// admin girişi yapıldığında bağlantıyı değiştir
function AdminConnection(adminUsername,adminPassword) {
    // Admin girişine özgü bağlantı bilgileri
    let adminConnectionString = `mongodb+srv://${adminUsername}:${adminPassword}@colayak.eawkzxv.mongodb.net/colAyak`;

    // Set the connection string to admin connection
    defaultConnectionString = adminConnectionString;

    // Yeni bağlantıyı kullanarak MongoDB'ye bağlan
    connectToDatabase(defaultConnectionString);
}

// Kullanıcı girişi yapıldığında bağlantıyı varsayılana çevir
function UserConnection() {
    // Set the connection string to default connection
    defaultConnectionString = 'mongodb+srv://default:tkk6tJP48tEsfnR5@colayak.eawkzxv.mongodb.net/colAyak';

    // Yeni bağlantıyı kullanarak MongoDB'ye bağlan
    connectToDatabase(defaultConnectionString);
}

// Varsayılan bağlantıyı kullanarak MongoDB'ye bağlan
connectToDatabase(defaultConnectionString);

module.exports = { AdminConnection, UserConnection };

  //Bu kısımda adminin kendine has kullanıcı adı ve şifresi web sitesinden girilecekse ordan bilgiler alınıp burda güncellenmeli.
  //Böylece hangi adminin düzenlemeler yaptığını bileceğiz.