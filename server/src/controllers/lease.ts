import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getLeases = async (req: Request, res: Response) => {
  try {
    const leases = await prisma.lease.findMany({
      include: {
        property: true,
        tenant: true,
      },
    });

    res.status(200).json(leases);
  } catch (error: any) {
    res.status(500).json({
      message: "Error fetching leases",
      error: error.message,
    });
  }
};

export const getLeasePayments = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payments = await prisma.payment.findMany({
      where: {
        leaseId: Number(id),
      },
    });

    res.status(200).json(payments);
  } catch (error: any) {
    res.status(500).json({
      message: "Error fetching leases",
      error: error.message,
    });
  }
};
