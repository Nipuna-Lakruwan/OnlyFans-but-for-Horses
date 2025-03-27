import BaseLayout from "@/components/BaseLayout";
import UserProfile from "./UserProfile";
import Posts from "./Posts";
import prisma from "@/db/prisma";
import { getUserProfileAction } from "@/app/update-profile/actions";
import { notFound } from "next/navigation";

const HomeScreen = async () => {
	// Check if ADMIN_EMAIL environment variable exists
	const adminEmail = process.env.ADMIN_EMAIL;

	// Only query if adminEmail exists
	const admin = adminEmail
		? await prisma.user.findUnique({ where: { email: adminEmail } })
		: null;

	const user = await getUserProfileAction();

	if (!user) return notFound();

	return (
		<BaseLayout>
			<UserProfile />
			<Posts admin={admin} isSubscribed={user?.isSubscribed} />
		</BaseLayout>
	);
};
export default HomeScreen;
