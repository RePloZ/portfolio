import { useAspect } from "@react-three/drei";
import { GroupProps, useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";
import { useStorePosition } from "features/position";
import React, { FC, useCallback, useRef } from "react";
import { Flex } from "@react-three/flex";


interface IPage {
    onChangePages: any
}

export const Page : FC<IPage> = ({ onChangePages }) => {
    const position = useStorePosition()
    const group = useRef<GroupProps>() as any
    const { size } = useThree()
    const [vpWidth, vpHeight] = useAspect(size.width, size.height)
    const vec = new Vector3()

    useFrame(() => 
        group.current?.position.lerp(vec.set(0, position.top / 100, 0), 0.1)
    )

    const handleReflow = useCallback(
        (v: number, h: number) => {
            onChangePages(h / vpHeight)
            // console.log({ h, vpHeight, pages: h / vpHeight });
        },
        [onChangePages, vpHeight]
    )

    return (<group ref={group}>
        <Flex
            flexDirection='column'
            size={[vpWidth, vpHeight, 0]}
            onReflow={handleReflow}
        >

        </Flex>
    </group>)
}