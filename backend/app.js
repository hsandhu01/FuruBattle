@@ -1,5 +1,7 @@
 const express = require('express');
 const mongoose = require('mongoose');
+const dotenv = require('dotenv');
+dotenv.config();
 const cors = require('cors');
 const authRoutes = require('./routes/authRoutes');
 const stockRoutes = require('./routes/stockRoutes');

...rest of the code...