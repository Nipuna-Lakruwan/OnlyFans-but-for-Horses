import RotatedText from "@/components/decorators/RotatedText";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamProps {
	imageUrl: string;
	name: string;
	position: string;
	description: string;
}

const teamList: TeamProps[] = [
	{
		imageUrl: "/nipuna.png",
		name: "Nipuna",
		position: "Farm Manager",
		description: "Nipuna is our farm manager, responsible for the day-to-day operations of the farm. ",
	},
	{
		imageUrl: "/devin.JPG",
		name: "Devin",
		position: "Head Trainer",
		description: "Devin is our head trainer, with over 20 years of experience working with horses. ",
	},
	{
		imageUrl: "/pasindu.JPG",
		name: "Pasindu ",
		position: "Riding Instructor",
		description: "Pasindu is our riding instructor, with a passion for teaching riders of all ages and abilities. ",
	},
	{
		imageUrl: "/sewmina.JPG",
		name: "Sewmina",
		position: "Veterinarian",
		description: "Dinuka is our on-site veterinarian, providing expert care for our horses.",
	},
	{
		imageUrl: "/malaka.JPG",
		name: "Malaka",
		position: "Groom",
		description: "Malaka is our groom, responsible for the daily care and grooming of our horses.",
	},
	{
		imageUrl: "/janith.jpg",
		name: "Janith",
		position: "Farrier",
		description: "Janith is our farrier, ensuring that our horses' hooves are healthy and well-maintained.",
	},
];

const Team = () => {
	return (
		<section className='container py-24 sm:py-32'>
			<h2 className='text-2xl sm:text-3xl md:text-5xl text-center tracking-tighter font-bold'>
				Our <RotatedText>Dedicated</RotatedText> Crew
			</h2>

			<p className='mt-4 mb-10 text-md md:text-xl text-muted-foreground text-center'>
				Meet the team that makes our farm a special place for horses and riders alike.
			</p>

			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10'>
				{teamList.map(({ description, imageUrl, name, position }) => (
					<Card key={name} className='bg-muted/50 relative mt-7 flex flex-col justify-center items-center'>
						<CardHeader className='my-8 flex justify-center items-center pb-2'>
							<img
								src={imageUrl}
								alt='Team member'
								className='absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover'
							/>
							<CardTitle className='text-center'>{name}</CardTitle>
							<CardDescription className='text-primary'>{position}</CardDescription>
						</CardHeader>

						<CardContent className='text-center pb-4 px-2'>
							<p>{description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};
export default Team;
