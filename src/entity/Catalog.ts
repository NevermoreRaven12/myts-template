import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Catalog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  edition: string;

  @Column()
  journal: string;

  @Column()
  pubisher: string;

  @Column()
  isPublished: boolean;
}
