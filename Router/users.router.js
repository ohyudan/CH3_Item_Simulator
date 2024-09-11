import express from "express";
import { prisma } from "../src/utils/index.js";

const router = express.Router();

// 회원가입
router.get(`/sign-up`, async (req, res, next) => {
  const { user_id, email, password, username } = req.body;
  const isEsistUser = await prisma.users.findFirst({ where: email });
});
// 캐릭터 생성 (JWT)

// 캐릭터 삭제 (JWT)

// 캐릭터 조회
export default router;
