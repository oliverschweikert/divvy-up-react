import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

const Logo = (props: any) => {
    const logoColor = useColorModeValue('#000000', '#ffffff')
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill={logoColor} stroke="none">
                <path d="M2345 5004 c-69 -6 -197 -25 -270 -40 -68 -14 -102 -22 -175 -43 -19
-5 -51 -14 -70 -19 -142 -39 -419 -164 -477 -215 -28 -24 -33 -36 -33 -71 1
-22 6 -50 13 -62 20 -34 1174 -1569 1189 -1581 38 -31 109 -23 145 15 113 119
191 201 313 332 80 85 177 189 215 230 83 88 201 214 300 320 124 131 228 242
301 320 221 234 224 238 224 282 0 33 -6 47 -37 77 -93 92 -437 272 -643 337
-25 8 -58 18 -75 24 -63 19 -183 48 -250 60 -38 7 -92 16 -120 22 -50 10 -475
19 -550 12z m513 -225 c13 -5 36 -9 53 -9 29 0 58 -6 179 -36 36 -9 80 -19 98
-21 18 -3 35 -9 38 -14 3 -5 16 -9 29 -9 13 0 27 -4 30 -10 3 -5 14 -10 24
-10 9 0 36 -9 59 -20 22 -11 45 -20 50 -20 18 0 310 -150 322 -166 14 -15 9
-22 -120 -153 -14 -15 -43 -46 -64 -71 -21 -25 -89 -97 -150 -160 -61 -64
-129 -136 -150 -160 -21 -25 -89 -97 -150 -160 -61 -64 -129 -136 -150 -160
-105 -119 -352 -370 -362 -368 -14 4 -1004 1322 -1004 1337 0 11 136 81 158
81 7 0 20 4 30 10 22 12 123 44 187 60 28 6 59 16 70 20 11 5 38 11 60 15 22
3 69 10 105 16 169 26 596 31 658 8z"/>
                <path d="M875 4326 c-58 -26 -238 -231 -353 -403 -208 -310 -324 -610 -394
-1023 -17 -102 -17 -580 0 -675 7 -38 18 -97 24 -130 45 -249 145 -517 279
-751 355 -618 984 -1069 1664 -1192 33 -6 92 -17 130 -24 94 -17 577 -18 663
0 34 6 90 17 125 23 126 24 311 75 359 100 22 12 48 61 48 91 0 13 -235 492
-522 1066 l-523 1043 -693 925 c-382 508 -703 931 -715 938 -36 23 -60 26 -92
12z m316 -645 c151 -200 286 -380 301 -400 15 -20 39 -52 53 -71 14 -19 41
-55 60 -80 19 -25 46 -61 60 -80 14 -19 41 -55 60 -80 19 -25 46 -61 59 -80
13 -19 33 -44 45 -54 11 -11 21 -24 21 -31 0 -6 14 -24 30 -40 17 -16 30 -34
30 -40 0 -6 14 -24 30 -40 17 -16 30 -34 30 -40 0 -6 14 -24 30 -40 17 -16 30
-34 30 -40 0 -6 14 -24 30 -40 17 -16 30 -33 30 -37 0 -5 13 -23 30 -41 16
-18 30 -36 30 -40 0 -4 9 -18 20 -30 32 -34 989 -1961 980 -1972 -20 -25 -231
-64 -457 -86 -91 -8 -155 -8 -250 0 -208 19 -272 28 -448 69 -110 26 -308 101
-430 164 -143 73 -176 92 -186 104 -6 8 -17 14 -23 14 -6 0 -35 18 -64 40 -29
22 -56 40 -61 40 -5 0 -15 7 -22 17 -8 9 -36 33 -64 53 -65 48 -277 260 -325
325 -20 28 -44 56 -53 64 -10 7 -17 17 -17 22 0 5 -18 32 -40 61 -22 29 -40
58 -40 64 0 6 -6 17 -14 23 -12 10 -31 43 -104 186 -81 156 -158 381 -191 555
-40 210 -55 414 -42 555 6 61 13 133 15 160 7 67 22 160 36 215 6 25 15 61 20
80 21 88 59 202 96 288 8 17 21 49 30 70 20 47 45 97 72 145 12 20 31 54 43
74 11 20 39 63 62 96 23 33 49 70 57 82 17 25 60 80 104 132 17 20 36 33 46
31 10 -2 141 -167 291 -367z"/>
                <path d="M4287 4088 c-29 -29 -118 -123 -197 -208 -228 -244 -270 -288 -355
-380 -45 -47 -112 -119 -150 -160 -39 -41 -77 -82 -85 -90 -29 -30 -361 -384
-520 -555 -36 -38 -72 -76 -80 -85 -38 -37 -60 -75 -60 -104 0 -21 157 -345
481 -994 516 -1032 493 -992 569 -992 52 0 202 113 379 284 267 260 465 564
593 911 17 44 34 94 38 110 54 190 63 230 92 400 8 53 13 167 13 335 0 273 -5
326 -55 545 -18 80 -30 122 -72 249 -36 108 -53 150 -106 266 -67 145 -225
392 -301 471 -42 43 -52 49 -89 49 -38 0 -48 -6 -95 -52z m128 -265 c19 -27
35 -53 35 -59 0 -6 7 -17 15 -24 19 -16 185 -347 185 -369 0 -9 4 -21 8 -27 5
-5 19 -43 31 -84 13 -41 27 -83 32 -92 5 -10 9 -25 9 -35 0 -9 4 -30 9 -47 23
-74 48 -236 61 -396 13 -161 -7 -410 -49 -610 -6 -25 -13 -58 -16 -75 -4 -16
-10 -39 -15 -50 -4 -11 -18 -54 -31 -95 -12 -41 -26 -79 -31 -84 -4 -6 -8 -18
-8 -27 0 -9 -9 -34 -19 -56 -11 -21 -38 -74 -59 -118 -63 -127 -89 -175 -104
-193 -8 -9 -20 -29 -28 -44 -7 -16 -17 -28 -22 -28 -4 0 -8 -6 -8 -13 0 -8 -9
-22 -20 -32 -11 -10 -20 -24 -20 -30 0 -7 -7 -19 -17 -26 -9 -8 -33 -36 -53
-64 -48 -65 -273 -289 -328 -327 -23 -16 -46 -27 -51 -24 -5 4 -197 383 -426
843 -349 699 -416 840 -409 859 5 13 65 81 134 151 69 70 138 144 154 163 15
19 83 91 150 160 66 69 134 141 150 160 15 19 83 91 150 160 66 69 134 141
150 160 16 19 85 94 155 166 69 72 150 159 179 192 29 34 57 62 62 62 6 0 25
-21 45 -47z"/>
            </g>
        </svg>


    );
};

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Logo />
                <Text>© 2022 DiveeUp. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <SocialButton label={'Twitter'} href={'#'}>
                        <FaTwitter />
                    </SocialButton>
                    <SocialButton label={'YouTube'} href={'#'}>
                        <FaYoutube />
                    </SocialButton>
                    <SocialButton label={'Instagram'} href={'#'}>
                        <FaInstagram />
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}