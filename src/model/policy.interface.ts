import { HierarchyNode } from 'd3-hierarchy';
export interface Policy{
    id: string
    hostname: string
    name: string
    parent_id: string
    policy_id: string
    scope_level: string
    is_inherited: boolean
}

export interface HierarchyPolicyNode extends HierarchyNode<Policy>{
    x?: number,
    y?: number
}
