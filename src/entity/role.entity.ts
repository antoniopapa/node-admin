import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Permission} from "./permission.entity";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Permission)
    @JoinTable({
        name: 'role_permissions',
        joinColumn: {name: 'role_id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'permission_id', referencedColumnName: 'id'}
    })
    permissions: Permission[];
}
