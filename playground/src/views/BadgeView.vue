<template>
    <div class="view-content">
        <h2>Badges</h2>

        <div class="section">
            <h4>Form</h4>
            <div class="b-flex b-gap-1">
                <Badge>1</Badge>
                <Badge form="circle" value="2"></Badge>
                <Badge>Test 1</Badge>
                <Badge form="circle" value="Test 2"></Badge>
            </div>
        </div>

        <div class="section">
            <h4>With Icon</h4>
            <div class="b-flex b-gap-1">
                <Badge>
                    <ArrowUpIcon/>
                    Icon
                </Badge>
                <Badge form="circle">
                    <ArrowUpIcon/>
                    Icon
                </Badge>
            </div>
        </div>

        <div class="section">
            <h4>Size</h4>
            <div class="b-flex b-gap-1">
                <Badge value="1" size="small"></Badge>
                <Badge value="1"></Badge>
                <Badge value="1" size="large"></Badge>
                <Badge value="1" size="xlarge"></Badge>
                <Badge value="1" size="small" form="circle"></Badge>
                <Badge value="1" form="circle"></Badge>
                <Badge value="1" size="large" form="circle"></Badge>
                <Badge value="1" size="xlarge" form="circle"></Badge>
            </div>
        </div>

        <div class="section">
            <h4>Type</h4>
            <div class="b-flex b-gap-1">
                <Badge value="default"></Badge>
                <Badge value="secondary" type="secondary"></Badge>
                <Badge value="success" type="success"></Badge>
                <Badge value="info" type="info"></Badge>
                <Badge value="warn" type="warn"></Badge>
                <Badge value="danger" type="danger"></Badge>
                <Badge value="contrast" type="contrast"></Badge>
            </div>
        </div>

        <div class="section">
            <h4>Overlay</h4>
            <div class="b-flex b-gap-4">
                <OverlayBadge value="5" type="danger" form="circle" size="small">
                    <BellIcon size="24" color="#3498db"/>
                </OverlayBadge>
                <OverlayBadge type="danger">
                    <EnvelopeIcon size="24" color="green"/>
                </OverlayBadge>

                <OverlayBadge value="5" type="danger" form="circle">
                    <BellIcon size="lg" />
                </OverlayBadge>

                <!-- Сценарій 2: Кошик з акцентом (Raven Green) -->
                <OverlayBadge value="new" size="small">
                    <Button type="secondary" shape="square">
                        <ShoppingCartIcon />
                    </Button>
                </OverlayBadge>

                <!-- Сценарій 3: Статус користувача (Просто кругла цятка) -->
                <OverlayBadge type="success" form="circle">
                    <div class="b-w-10 b-h-10 b-bg-surface b-border b-rounded-full b-flex b-items-center b-justify-center">
                        <UserIcon />
                    </div>
                </OverlayBadge>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Badge from "@bestiary-ui/components/misc/badge";
import OverlayBadge from "@bestiary-ui/components/misc/overlaybadge";
import Button from "@bestiary-ui/components/button/button";
import {ArrowUpIcon, BellIcon, EnvelopeIcon, UserIcon, ShoppingCartIcon} from "@bestiary-ui/icons/24/solid";
</script>
