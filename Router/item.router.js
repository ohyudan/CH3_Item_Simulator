import express from "express";
import { prisma } from "../src/utils/index.js";

const router = express.Router();
// 아이템 목록 조회
router.get(`/item/view`, async (req, res, next) => {});
// 아이템 생성
// 아이템 수정 -> 가격x
// 아이템 상세 조회

//-----
// 아이템 구입 (JWT)
// 아이템 판매 (JWT)
// 캐릭터 장착한 아이템 목록 조회
// 아이템 장착 (JWT) -> 스텟 변경
// 아이템 탈착 (JWT) -> 스텟 변경
// 돈 벌기 (JWT)
export default router;
