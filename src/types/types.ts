import { z } from 'zod';

// zod type schema declaration based on data schema

const ImageType = z.object({
	url: z.string(),
	fileType: z.string(),
	alt: z.string(),
});

const MenuType = z.array(
	z.object({
		title: z.string(),
		value: z.string(),
	})
);

const LinkType = z.object({
	title: z.string(),
	element: z.string(),
	link: z.string(),
	image: ImageType.optional(),
});

const DropdownType = z.object({
	title: z.string(),
	element: z.string(),
	link: z.string(),
	menu: MenuType,
});

const DropdownTypes = z.object({
	icons: DropdownType,
});

const ButtonType = z.object({
	name: z.string(),
	title: z.string(),
	value: z.string(),
	type: z.string(),
	validation: z.string(),
});

const ButtonTypes = z.object({
	submitRequest: ButtonType,
	addName: ButtonType,
});

const InputType = z.object({
	name: z.string(),
	label: z.string(),
	placeholder: z.string(),
	type: z.string(),
	minLength: z.number(),
	maxLength: z.number(),
	size: z.number(),
	isRequired: z.boolean(),
});

const InputTypes = z.object({
	firstName: InputType,
	lastName: InputType,
	email: InputType,
	dateOfBirth: InputType,
	phoneNumber: InputType,
});

const CardType = z.object({
	name: z.string(),
	element: z.string(),
	title: z.string(),
	subtitle: z.string(),
	description: z.string(),
	inputs: InputTypes,
	buttons: ButtonTypes,
	dropdowns: DropdownTypes,
});

const CardTypes = z.object({
	heroCard: CardType,
});

// extract the inferred zod type schema and export them to parent tsx components that will passed down data and types as props to child tsx components

export type ImageType = z.infer<typeof ImageType>;

export type MenuType = z.infer<typeof MenuType>;

export type LinkType = z.infer<typeof LinkType>;

export type DropdownType = z.infer<typeof DropdownType>;
export type DropdownTypes = z.infer<typeof DropdownTypes>;

export type ButtonType = z.infer<typeof ButtonType>;
export type ButtonTypes = z.infer<typeof ButtonTypes>;

export type InputType = z.infer<typeof InputType>;
export type InputTypes = z.infer<typeof InputTypes>;

export type CardType = z.infer<typeof CardType>;
export type CardTypes = z.infer<typeof CardTypes>;

