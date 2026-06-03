"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const PORT = 8000;
const MONGODB_URI = 'mongodb://127.0.0.1:27017/octofit-tracker';
app.use(express_1.default.json());
app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});
const start = async () => {
    try {
        await mongoose_1.default.connect(MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`Backend running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error('Failed to start backend:', error);
        process.exit(1);
    }
};
void start();
